import React from 'react';
import './App.css';

var n = 1000;

function Sine(time : number, rate : number, amp : number, phase : number) {
  return (
    amp * Math.sin(rate * (time - phase))
  );
}

function Square(time : number, rate : number, amp : number, phase : number) {
  return (
    amp * Math.sin((2 * n - 1) * rate * (time - phase)) / (2 * n - 1)
  );
}

function Sawtooth(time : number, rate : number, amp : number, phase : number) {
  return (
    amp * Math.sin(n * rate * (time - phase)) / n
  );
}

function Triangle(time : number, rate : number, amp : number, phase : number) {
  return (
    amp * Math.sin((2 * n - 1) * rate * (time - phase)) *(-1) ^ n / (2 * n - 1) ^ 2
  );
}

function Random(time : number, rate : number, amp : number, phase : number) {
  return (
    amp * Math.random()
  );
}

function Wave(shape: string, time : number, rate : number, amp : number, phase : number){
  
  switch (shape){
    default:
      return Sine(time, rate, amp, phase);
    case "square":
      return Square(time, rate, amp, phase);
    case "ramp":
      return Sawtooth(time, rate, amp, phase);
    case "triange":
      return Triangle(time, rate, amp, phase);
    case "random":
      return Random(time, rate, amp, phase);
  }
}

export default Wave;