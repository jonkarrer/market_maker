interface IWrapper {
  children: React.ReactNode;
  display: string;
}
const SuppWrapper = ({ children, display }: IWrapper) => (
  <div
    id="page-container"
    className={`${display} justify-center h-auto rounded-3xl sm:pt-10 sm:w-11/12 md:w-4/5 max-w-screen-xl m-auto sm:-mt-44 bg-white`}
  >
    {children}
  </div>
);

export default SuppWrapper;
