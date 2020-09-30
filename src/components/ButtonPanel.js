import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

function ButtonPanel() {
  return (
    <div className="ButtonPanel" id="button-panel">
      <div className="group1">
        <Button buttonName="AC" />
        <Button buttonName="+/-" />
        <Button buttonName="%" />
        <Button buttonName="÷" />
      </div>
      <div className="group2">
        <Button buttonName="7" />
        <Button buttonName="8" />
        <Button buttonName="9" />
        <Button buttonName="x" />
      </div>
      <div className="group3">
        <Button buttonName="4" />
        <Button buttonName="5" />
        <Button buttonName="6" />
        <Button buttonName="-" />
      </div>
      <div className="group4">
        <Button buttonName="1" />
        <Button buttonName="2" />
        <Button buttonName="3" />
        <Button buttonName="+" />
      </div>
      <div className="group5">
        <Button buttonName="0" />
        <Button buttonName="." />
        <Button buttonName="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
