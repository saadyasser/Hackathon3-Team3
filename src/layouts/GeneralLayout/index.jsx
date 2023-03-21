export const GeneralLayout = ({ children, captionProp }) => {
  return (
    <div>
      <div className="flex flex-col ml-[16%] md:ml-[26%] xl:ml-[16%]">
        <div className="w-full xl:w-[60%] order-2 h-full ml-0 mt-10 lg:mt-10 box-border">
          {children}
        </div>
        {captionProp && (
          <div className="w-[100%]  xl:w-[31%] order-1 xl:fixed lg:top-24 xl:right-0">
            {captionProp}
          </div>
        )}
      </div>
    </div>
  );
};
