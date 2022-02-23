import React, { memo, useMemo, Profiler, useState } from "react";

function CommentItem({ id, title, comment, likes, onClick }) {
  const [clickCount, setClickCount] = useState(0);
  function onRenderCallback(
    id, // 방금 커밋된 Profiler 트리의 "id"
    phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
    actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
    baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간
    startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
    commitTime, // React가 해당 업데이트를 언제 커밋했는지
    interactions // 이 업데이트에 해당하는 상호작용들의 집합
  ) {
    // 렌더링 타이밍을 집합하거나 로그...
    console.log(
      `TITLE = ${title}
actualDuration-Title = ${actualDuration}
baseDuration = ${baseDuration}`
    );
  }
  const handleClick = () => {
    console.log(`${title} 눌렀다!`);
    setClickCount((prev) => prev + 1);
    onClick();
  };
  const rate = () => {
    console.log("Rate Check!");
    return clickCount > 9 ? "GOOD!" : "Normal";
  };
  if (id > 2) {
    return false;
  }
  return (
    <Profiler id="CommentItem" onRender={onRenderCallback}>
      <div className="commentItem" onClick={handleClick}>
        <div>ID : {id}</div>
        <div>Title : {title}</div>
        <div>Comment : {comment}</div>
        <div>Like : {likes}</div>
        <div>Rate : {rate()}</div>
        <div>Clicks : {clickCount}</div>
      </div>
    </Profiler>
  );
}

export default memo(CommentItem);
