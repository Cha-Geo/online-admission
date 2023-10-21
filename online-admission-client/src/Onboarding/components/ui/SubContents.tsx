import Accordion from "../Accordion";

interface IProps {
  data: IContents[];
  additionalData?: ISubContent[];
  pageTitle: string;
}

const ContentCard = ({ title, description }: IContents) => (
  <div className="p-6 bg-white rounded-lg shadow-lg mb-8 h-48 transform transition-transform hover:scale-102 xs:hover:scale-105">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContentList = ({ data, additionalData, pageTitle }: IProps) => {
  return (
    <>
      {" "}
      <div className="py-12">
        <div className="container">
          <h1 className="text-4xl font-semibold text-center mb-8 capitalize">
            {pageTitle}
          </h1>
          <div className="grid items-center w-[100%] md:w-auto grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {data.map((item, index: number) => (
              <ContentCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      {additionalData && (
        <Accordion
          accordionData={additionalData}
          accordionTitle="college philosophy"
          className="mb-10"
        />
      )}
    </>
  );
};

export default ContentList;
