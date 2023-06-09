const Connect = ({ connect }) => {
  return (
    <div className="pt-16">
      <h3 className="text-2xl font-light italic">connect to wallet</h3>
      <button
        onClick={connect}
        className="px-5 mt-6 p-2 italic"
        style={{
          color: "white",
          background: "#7328ff",
          boxShadow: "6px 6px black",
        }}
      >
        connect wallet
      </button>
      <p className="mt-6">please unlock metamask</p>
    </div>
  );
};

export default Connect;
