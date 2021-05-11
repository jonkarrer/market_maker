interface IMember {
  children: React.ReactNode;
  name: string;
}

const Member = ({ children, name }: IMember) => (
  <div className="grid place-content-center justify-items-center space-y-5">
    <div className="w-1/2 h-60 sm:w-full sm:h-64 lg:w-60 lg:h-72 bg-gray-500"></div>
    <div className="space-y-3">
      <h2 className="text-xl lg:text-2xl text-center mt-5">{name}</h2>
      <p className="mx-std sm:m-0 lg:mx-10% xl:mx-12% sm:text-sm lg:text-base">
        {children}
      </p>
    </div>
  </div>
);

export default Member;
