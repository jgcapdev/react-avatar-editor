const CharacterForm = ({
  skin,
  hair,
  top,
  bottom,
  footwear,
  handleSkin,
  handleHair,
  handleTop,
  handleBottom,
  handleFootwear,
  handleReset,
  handleColors,
}) => {
  return (
    <>
      <h4 className="text-center">Properties</h4>

      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="skin">
            <strong>Skin</strong>
          </label>
          <input
            className="form-control"
            type="color"
            id="skin"
            name="skin"
            value={skin}
            onChange={(e) => handleSkin(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="hair">
            <strong>Hair</strong>
          </label>
          <input
            className="form-control"
            type="color"
            id="hair"
            name="hair"
            value={hair}
            onChange={(e) => handleHair(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="top">
            <strong>Top</strong>
          </label>
          <input
            className="form-control"
            type="color"
            id="top"
            name="top"
            value={top}
            onChange={(e) => handleTop(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="bottom">
            <strong>Bottom</strong>
          </label>
          <input
            className="form-control"
            type="color"
            id="bottom"
            name="bottom"
            value={bottom}
            onChange={(e) => handleBottom(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="footwear">
            <strong>Footwear</strong>
          </label>
          <input
            className="form-control"
            type="color"
            id="footwear"
            name="footwear"
            value={footwear}
            onChange={(e) => handleFootwear(e.target.value)}
          />
        </div>

        <div className="mb-3 text-center">
          <button onClick={(e) => handleColors(e)} className="btn btn-primary btn-margin">
            Acept
          </button>
          <button onClick={(e) => handleReset(e)} className="btn btn-warning">
            Reset Colors
          </button>
        </div>
      </form>
    </>
  );
};

export default CharacterForm;
