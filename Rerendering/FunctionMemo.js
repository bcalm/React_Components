import React from 'react';

function FunctionMemo({name}) {
  return <div>{name}</div>;
}

export default React.memo(FunctionMemo);
