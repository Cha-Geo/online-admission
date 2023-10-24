'use client'
import { Endpoints } from "@/app/api/enpoints";
import { fetcher } from "@/app/api/route";
import { HostelStatistics } from "@/services/data/dummyData";
import useSWR from "swr";
import CardStats from "../../cards/CardStats";
export default function HeaderStats() {

  const { Income, Reservation, Room, RoomType, Withdrawal } = HostelStatistics;
  const { data, error } = useSWR(Endpoints?.AnalyticsOverview, fetcher);
  if (error) return <div>failed to load</div>;
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 xl:w-5/12 mt-3 px-4">
                <CardStats
                  statSubtitle={"Income (GHS)"}
                  statTitle={data?.data?.OverviewData?.Income?.Total ?? 0}
                  statArrow={Income?.Arrow}
                  statPercent={Income?.Percentage}
                  statPercentColor={Income?.PercentColor}
                  statDescripiron={Income?.Descripiron}
                  statIconName="fas fa-money-bill-alt"
                  statIconColor="bg-green-500"
                />
              </div>

              <div className="w-full lg:w-4/12 xl:w-5/12 mt-3 px-4">
                <CardStats
                  statSubtitle={"Withdrawal (GHS)"}
                  statTitle={data?.data?.OverviewData?.Withdrawal?.Total ?? 0}
                  statArrow={Withdrawal?.Arrow}
                  statPercent={Withdrawal?.Percentage}
                  statPercentColor={Withdrawal?.PercentColor}
                  statDescripiron={Withdrawal?.Descripiron}
                  statIconName="fas fa-money-bill-alt"
                  statIconColor="bg-red-500"
                />
              </div>

              <div className="w-full lg:w-4/12 xl:w-5/12 mt-3 px-4">
                <CardStats
                  statSubtitle={"Reservation"}
                  statTitle={data?.data?.OverviewData?.Reservation?.Total ?? 0}
                  statArrow={Reservation?.Arrow}
                  statPercent={Reservation?.Percentage}
                  statPercentColor={Reservation?.PercentColor}
                  statDescripiron={Reservation?.Descripiron}
                  statIconName="fas fa-users"
                  statIconColor="bg-green-500"
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-5/12 mt-3 px-4">
                <CardStats
                  statSubtitle={"Hostels"}
                  statTitle={data?.data?.OverviewData?.Hostel?.Total ?? 0}
                  statArrow={Withdrawal?.Arrow}
                  statPercent={Withdrawal?.Percentage}
                  statPercentColor={Withdrawal?.PercentColor}
                  statDescripiron={Withdrawal?.Descripiron}
                  statIconName="fas fa-hotel"
                  statIconColor="bg-blue-500"
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-5/12 mt-3 px-4">
                <CardStats
                  statSubtitle={"Room Type"}
                  statTitle={data?.data?.OverviewData?.RoomType?.Total ?? 0}
                  statArrow={RoomType?.Arrow}
                  statPercent={RoomType?.Percentage}
                  statPercentColor={RoomType?.PercentColor}
                  statDescripiron={RoomType?.Descripiron}
                  statIconName="fas fa-home"
                  statIconColor="bg-blue-500"
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-5/12 mt-3 px-4">
                <CardStats
                  statSubtitle={"Room"}
                  statTitle={data?.data?.OverviewData?.Room?.Total ?? 0}
                  statArrow={Room?.Arrow}
                  statPercent={Room?.Percentage}
                  statPercentColor={Room?.PercentColor}
                  statDescripiron={Room?.Descripiron}
                  statIconName="fas fa-home"
                  statIconColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
