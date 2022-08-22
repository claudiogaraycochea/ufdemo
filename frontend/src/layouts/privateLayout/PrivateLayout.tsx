import React, { useEffect, useState } from 'react';

function PrivateLayout(props: any) {
  return <div className="private-layout">
    <div>Header</div>
    <div className="dark">
      {props.children}
    </div>
    <div>Footer</div>
  </div>
}

export default PrivateLayout