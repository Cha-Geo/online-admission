import TablesDropdown from "@/components/dropdowns/TablesDropdown";
import { tableData } from "@/services/data/tableData";
import Image from 'next/image';

function TableHeader({ color = 'light' }: ICardTableProps) {
  const headerClasses = `px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
    color === "light"
      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"
  }`;

  const headers: CardTableHeaders[] = ["Project", "Budget", "Status", "Users", "Completion", ""];

  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index} className={headerClasses}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TableRow({ color, data }: ITableRowProps) {
  const rowClasses =
    "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4";

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <th className={rowClasses + " text-left flex items-center"}>
            <Image
              width={300}
              height={350}
              src={item.imageSrc}
              className="h-12 w-12 bg-white rounded-full border"
              alt="..."
            />
            <span
              className={`ml-3 font-bold ${
                color === "light" ? "text-blueGray-600" : "text-white"
              }`}
            >
              {item.projectName}
            </span>
          </th>
          <td className={rowClasses}>{item.budget}</td>
          <td className={rowClasses}>
            <i className={`fas fa-circle text-${item.status.color} mr-2`}></i>{" "}
            {item.status.text}
          </td>
          <td className={rowClasses}>
            <div className="flex">
              {item.users.map((user, index) => (
                <Image
                  width={300}
                  height={350}
                  key={index}
                  src={user.imageSrc}
                  alt="..."
                  className={`w-10 h-10 rounded-full border-2 border-blueGray-50 shadow ${
                    index > 0 ? "-ml-4" : ""
                  }`}
                />
              ))}
            </div>
          </td>
          <td className={rowClasses}>
            <div className="flex items-center">
              <span className="mr-2">{item.completion.percent}</span>
              <div className="relative w-full">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                  <div
                    style={{ width: item.completion.percent }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td className={rowClasses + " text-right"}>
            <TablesDropdown />
          </td>
        </tr>
      ))}
    </tbody>
  );
}


export default function CardTable({ color = 'light' }: ICardTableProps) {
  return (
    <div className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ${color === "light" ? "bg-white" : "bg-blueGray-700 text-white"}`}>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className={`font-semibold text-lg ${color === "light" ? "text-blueGray-700" : "text-white"}`}>Card Tables</h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <TableHeader color={color} />
          <TableRow color={color} data={tableData} />
        </table>
      </div>
    </div>
  );
}