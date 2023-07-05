import s from "./Steps.module.scss";

function Steps() {
  return (
    <>
      <div className={s.root} />
      <div className={s.steps}>
        <div className={s.stepItem}>
          <div className={s.point} />
        </div>
        <div className={s.stepItem} />
        <div className={s.stepItem} />
      </div>
      <div className={s.stepsNum}>
        <div className={s.num}>1</div>
        <div className={s.num}>2</div>
        <div className={s.num}>3</div>
      </div>
    </>
  );
}

export default Steps;
