import styles from "./page-loader.module.css";

const PageLoader = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex relative">
        <div className={styles.page_loader}></div>
        <h3 className="text-sm font-semibold text-body italic absolute top-1/2 -mt-2 w-full text-center">
          loading
        </h3>
      </div>
    </div>
  );
};

export default PageLoader;
