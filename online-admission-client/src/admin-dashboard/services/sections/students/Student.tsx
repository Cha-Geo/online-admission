'use client'
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useCallback } from "react";
import useSWR from "swr";
import Router from "next/router";
import { Endpoints } from "@/app/api/enpoints";
import { fetcher, DeleteRequest } from "@/app/api/route";
import { Button } from "@/components/Buttons";
import ConfirmDialogue from "@/components/notifications/Dialogue";
import TableTemplate from "@/components/ui/cards/Table";
import { StudentsColumns } from "@/services/data/dummyData";
import ToastMessage from "@/components/notifications/Toast";

export default function Studentsection() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const { data, error } = useSWR(
    `${Endpoints?.PrivateAccommodation}?page=${page}&limit=${limit}${
      search !== "" ? `&search=${search}` : ""
    }`,
    fetcher
  );
  if (error) return <div>failed to load</div>;

  const privateAccommodations = data?.data;

  const handleNextPaginate = () => {
    if (privateAccommodations?.hasNextPage) {
      setPage(privateAccommodations?.nextPage);
    }
  };
  const handlePrevPaginate = () => {
    if (privateAccommodations?.hasPrevPage) {
      setPage(privateAccommodations?.prevPage);
    }
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e?.target;
    setSearch(value);
  };
  const [Students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [Id, setID] = useState<string | null>(null);
  
const SuccessNotification = useCallback((message: string) => {
  return <ToastMessage type="success" message={message} />;
}, []);

const ErrorNotification = useCallback((message: string) => {
  return <ToastMessage type="error" message={message} />;
}, []);

  useEffect(() => {
      const Action = (id: string, _type: string) => {
        const Request =
          _type === "delete"
            ? DeleteRequest(`${Endpoints?.PrivateAccommodation}/${id}`)
            : null;
        _type === "delete" ? setType("delete") : null;
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
    const ConfirmAction = (id: string, _type: string) =>
        ConfirmDialogue({
        title: `Are you sure you want to ${
            _type === "delete" ? "delete" : ""
        } this hostel?`,
        onSave: () => Action(id, _type),
    });
    if (privateAccommodations?.docs?.length > 0) {
      const newData = privateAccommodations?.docs?.map((e: any) => ({
        fullName: e?.tenantDetails?.fullName,
        emailAddress: e?.tenantDetails?.email,
        phoneNumber: e?.tenantDetails?.phoneNumber,
        gender: e?.tenantDetails?.gender,
        numberOfOptions: e?.numberOfOptions,
        numberOfUsedOptions: e?.numberOfUsedOptions,
        uniqueCode: e?.uniqueCode,
        isActive: e?.isActive ? "YES" : "NO",
        accessLevel: e?.accessLevel,
        nameOfAccessLevel:
          e?.accessLevel === "accommodation"
            ? e?.accommodation?.name
            : e?.accessLevel === "roomtype"
            ? e?.roomType?.name
            : e?.accessLevel === "room"
            ? e?.room?.roomNumber
            : "",
        CreatedAt: e?.createdAt,
        edit: (
          <a href={`/admin/student/${e?._id}`}>
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

      setStudents(newData);
    } else {
      setStudents([]);
    }
  }, [ErrorNotification, Id, SuccessNotification, data, loading, privateAccommodations?.docs, type]);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <TableTemplate
            columns={StudentsColumns}
            rows={Students}
            title="Private Accommodations"
            key="Private Accommodations"
            Add={true}
            addLink="/admin/student/addStudent"
            addBulkLink="/admin/student/addBulkStudents"
            Edit={true}
            Delete={true}
            addBulk={true}
            handleNextPaginate={handleNextPaginate}
            handlePrevPaginate={handlePrevPaginate}
            hasNextPage={privateAccommodations?.hasNextPage}
            hasPrevPage={privateAccommodations?.hasPrevPage}
            handleSearch={handleSearch}
            searchValue={search}
          />
        </div>
      </div>
    </>
  );
}
