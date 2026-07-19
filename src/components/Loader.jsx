import { useEffect, useState } from 'react';

function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" style={hidden ? { top: '-100%' } : {}}>
      <h1>WRITE</h1>
      <h1>SHARE</h1>
      <h1>INSPIRE</h1>
    </div>
  );
}

export default Loader;
