/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useCallback } from "react";
import useSWR from "swr";
import Router from "next/router";
import { Endpoints, Constants } from "@/app/api/enpoints";
import { fetcher, DeleteRequest, PutRequest } from "@/app/api/route";
import { Button } from "@/components/Buttons";
import ConfirmDialogue from "@/components/notifications/Dialogue";
import TableTemplate from "@/components/ui/cards/Table";
import { HostelsColumns } from "@/services/data/dummyData";
import ToastMessage from "@/components/notifications/Toast";

export default function HostelSection() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  const { data, error } = useSWR(
    `${Endpoints?.Accommodation}?page=${page}&limit=${limit}${
      search !== "" ? `&search=${search}` : ""
    }`,
    fetcher
  );

  if (error) return <div>failed to load</div>;

  const accommodations = data?.data;

  const handleNextPaginate = () => {
    if (accommodations?.hasNextPage) {
      setPage(accommodations?.nextPage);
    }
  };
  const handlePrevPaginate = () => {
    if (accommodations?.hasPrevPage) {
      setPage(accommodations?.prevPage);
    }
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e?.target;
    setSearch(value);
  };

  const [Accommodations, setAccommodations] = useState<any[]>([]); // Update this type to match your data structure.
  const [loading, setLoading] = useState<boolean | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [Id, setID] = useState<string | null>(null);

  useEffect(() => {
    if (accommodations?.docs?.length > 0) {
      const newData = accommodations?.docs?.map((e: any) => ({
        name: e?.name,
        phone: e?.phone,
        email: e?.email,
        region: e?.region,
        city: e?.city,
        mapUrl: (
          <a href={e?.mapUrl} className="text-blue-500">
            map url
          </a>
        ),
        digitalAddress: e?.digitalAddress,
        bookingDuration: e?.bookingDuration,
        isPrivate: e?.isPrivate ? "YES" : "NO",
        isVerified: e?.isVerified ? "YES" : "NO",
        isFeatured: e?.isFeatured ? "YES" : "NO",
        status: e?.status,
        institutionName: e?.institution?.name,
        accommodationType: e?.accommodationType,
        generalDescription: (
          <p className=" mx-auto">
            {" "}
            {e?.generalDescription?.substring(0, 50)}...
          </p>
        ),
        securityDescription: (
          <p className=" mx-auto">
            {" "}
            {e?.securityDescription?.substring(0, 50)}...
          </p>
        ),
        facilityDescription: (
          <p className=" mx-auto">
            {" "}
            {e?.facilityDescription?.substring(0, 50)}...
          </p>
        ),
        locationDescription: (
          <p className=" mx-auto">
            {" "}
            {e?.locationDescription?.substring(0, 50)}...
          </p>
        ),
        goLive: (
          <Button
            bgColor={
              e?.status?.toLowerCase() === Constants?.Published
                ? "green"
                : "yellow"
            }
            label={
              e?.status?.toLowerCase() === Constants?.Published
                ? "Go Offline"
                : "Go Live"
            }
            loading={loading && type === "golive" && e?._id === Id}
            onClick={() =>
              ConfirmAction(e?._id, "golive", e?.status ? e?.status : "")
            }
          />
        ),
        featureAccommodation: (
          <Button
            bgColor={e?.isFeatured ? "green" : "yellow"}
            label={e?.isFeatured ? "Unfeature" : "Feature"}
            loading={loading && type === "feature" && e?._id === Id}
            onClick={() => ConfirmAction(e?._id, "feature", e?.isFeatured)}
          />
        ),
        verifyAccommodation: (
          <Button
            bgColor={e?.isVerified ? "green" : "yellow"}
            label={e?.isVerified ? "Unverify" : "Verify"}
            loading={loading && type === "verify" && e?._id === Id}
            onClick={() => ConfirmAction(e?._id, "verify", e?.isVerified)}
          />
        ),
        edit: (
          <a href={`/admin/hostel/${e._id}`}>
            <Button bgColor="blue" label="Edit" />
          </a>
        ),
        delete: (
          <Button
            bgColor="red"
            label="Delete"
            loading={loading && type === "delete" && e?._id === Id}
            onClick={() => ConfirmAction(e?._id, "delete")}
          />
        ),
      }));

      setAccommodations(newData);
    } else {
      setAccommodations([]);
    }
  }, [data]);

 const ConfirmAction = (id: string, _type: string, status?: string | boolean) =>
   ConfirmDialogue({
     title: `Are you sure you want to ${
       _type === "delete"
         ? "delete"
         : _type === "golive"
         ? "change the live status of"
         : _type === "verify"
         ? status
           ? "unverify"
           : "verify"
         : _type === "feature"
         ? status
           ? "unfeature"
           : "feature"
         : ""
     } this accommodation?`,
     onSave: () => Action(id, _type, status),
   });

 const Action = (
   id: string,
   _type: string,
   status: string | boolean | undefined
 ) => {
   if (status === undefined) {
     // Handle the case where 'status' is undefined
     return;
   }

   const Request =
     _type === "delete"
       ? DeleteRequest(`${Endpoints?.Accommodation}/${id}`)
       : _type === "golive"
       ? PutRequest(`${Endpoints?.Accommodation}/${id}`, {
           status:
             typeof status === "string" && status === Constants.Published
               ? Constants.Draft
               : Constants.Published,
         })
       : _type === "feature"
       ? PutRequest(`${Endpoints?.Accommodation}/${id}`, {
           isFeatured: !status,
         })
       : _type === "verify"
       ? PutRequest(`${Endpoints?.Accommodation}/${id}`, {
           isVerified: typeof status === "boolean" ? !status : false,
         })
       : null;

   _type === "delete"
     ? setType("delete")
     : _type === "golive"
     ? setType("golive")
     : null;

   setLoading(true);
   setID(id);

   Request?.then((res) => {
     setLoading(false);
     SuccessNotification(res?.data?.message);
     Router.reload();
   }).catch((err) => {
     setLoading(false);
     ErrorNotification(err?.response?.data?.message);
   });
 };


const SuccessNotification = useCallback((message: string) => {
  return <ToastMessage type="success" message={message} />;
}, []);

const ErrorNotification = useCallback((message: string) => {
  return <ToastMessage type="error" message={message} />;
}, []);


  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <TableTemplate
            columns={HostelsColumns}
            rows={Accommodations}
            title="Accommodations"
            key="Accommodations"
            Add={true}
            addLink="/admin/accommodation/add"
            Edit={true}
            Delete={true}
            handleNextPaginate={handleNextPaginate}
            handlePrevPaginate={handlePrevPaginate}
            hasNextPage={accommodations?.hasNextPage}
            hasPrevPage={accommodations?.hasPrevPage}
            handleSearch={handleSearch}
            searchValue={search}
            loading={!data}
          />
        </div>
      </div>
    </>
  );
}
