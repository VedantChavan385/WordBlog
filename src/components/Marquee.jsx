function Marquee() {
  const renderCon = (key) => (
    <div className="con" key={key}>
      <h1>STORIES</h1>
      <div className="gola"></div>
      <h1>THAT</h1>
      <div className="gola"></div>
      <h1>MATTER</h1>
      <div className="gola"></div>
    </div>
  );

  return (
    <div id="moving-text">
      {renderCon('con-1')}
      {renderCon('con-2')}
      {renderCon('con-3')}
    </div>
  );
}

export default Marquee;
