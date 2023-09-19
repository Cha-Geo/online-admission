type Props = {
  sectionData: ISection[];
};

const Sections = ({sectionData}: Props) => {
  return (
    <div>
      {sectionData.map((item) => (
        <section id={item.id} key={item.id} className="a">
          <h3 className="">{item.data.head}</h3>
          <p className="">{item.data.body}</p>
          <h3 className="">{item.data.conclusion}</h3>
        </section>
      ))}
    </div>
  );
};

export default Sections;
