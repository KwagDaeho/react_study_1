import React, { useState, useEffect } from "react";

export default function FunctionalComponent() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h2>Functional Component</h2>
      <h2>It is {date.toLocaleTimeString()}.</h2>
      <p>
        Hook 이전에는 State를 관리하기 위해서는 무조건 클래스형 컴포넌트를
        사용했으나, Hook을 이용한 State 상태관리가 나오게 되면서 함수형
        컴포넌트를 자주 사용하게 되었다.
      </p>
      <div>1. 함수형 컴포넌트에서 State를 직접 수정하지 말 것.</div>
      <div>2. 함수형 컴포넌트에서는 State 업데이트가 비동기적일 수 있다.</div>
    </div>
  );
}
