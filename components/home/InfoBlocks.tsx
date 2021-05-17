const InfoBlocks = () => {
  return (
    /* Three Info Blocks // Styles in global.css */
    <div
      id="blocks-container"
      className="my-20% sm:my-10% grid gap-12 text-center sm:flex sm:justify-start sm:items-start"
    >
      <div className="info-block">
        <img src="./assets/four-circles.svg" alt="4 square icon" />
        <h3>Be a Market Maker</h3>
        <p>
          Easily sign up in the app, and keep your number and phone or change
          both. No matter what, you'll get unlimited data, messages, and minutes
          for one (really) low price.
        </p>
      </div>
      <div className="info-block">
        <img src="./assets/four-circles.svg" alt="4 square icon" />
        <h3>Experience our Service</h3>
        <p>
          After activating your SIM in the app, you're ready to experience the
          power of our network. We know getting Verizon service at a fraction of
          the cost might seem to good to be true, but it is true.
        </p>
      </div>
      <div className="info-block">
        <img src="./assets/four-circles.svg" alt="4 square icon" />
        <h3>Bring some Friends</h3>
        <p>
          Since trading only gets better with friends, it makes sense to give
          you several ways to save when you enjoy Visible with them. Join a
          party and cut your bill to $25/mo, or something else.
        </p>
      </div>
    </div>
  );
};

export default InfoBlocks;
