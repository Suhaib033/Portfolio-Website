
import React from "react";

const codeSymbols = ['{', '}', '<', '>', '/', '[', ']', ';', '(', ')'];
const binaryDigits = ['0', '1', '00', '11', '01', '10'];
const chartSymbols = ['|||_', '|||', '/\\_', '\\_/', '...', '•••'];

const AnimatedBackground: React.FC = () => {
  const particles = [];
  
  const numParticles = 25;
  const numLines = 15;
  const numSquares = 12;
  const numTriangles = 12;
  const numBinary = 20;
  const numCodeSymbols = 18;
  const numCharts = 15;
  
  for (let i = 0; i < numParticles; i++) {
    const size = Math.random() * 5 + 2;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 15;
    
    particles.push(
      <div 
        key={`particle-${i}`}
        className="data-particle"
        style={{
          left: `${xPos}%`,
          top: `${yPos}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }
  
  for (let i = 0; i < numLines; i++) {
    const width = Math.random() * 80 + 20;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 20;
    const rotation = Math.random() * 360;
    
    particles.push(
      <div 
        key={`line-${i}`}
        className="data-line"
        style={{
          left: `${xPos}%`,
          top: `${yPos}%`,
          width: `${width}px`,
          transform: `rotate(${rotation}deg)`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }
  
  for (let i = 0; i < numSquares; i++) {
    const size = Math.random() * 15 + 5;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 25;
    
    particles.push(
      <div 
        key={`square-${i}`}
        className="data-square"
        style={{
          left: `${xPos}%`,
          top: `${yPos}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }
  
  for (let i = 0; i < numTriangles; i++) {
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 18;
    
    particles.push(
      <div 
        key={`triangle-${i}`}
        className="data-triangle"
        style={{
          left: `${xPos}%`,
          top: `${yPos}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }
  
  for (let i = 0; i < numBinary; i++) {
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 15 + 20;
    const binaryValue = binaryDigits[Math.floor(Math.random() * binaryDigits.length)];
    
    particles.push(
      <div 
        key={`binary-${i}`}
        className="data-binary"
        style={{
          left: `${xPos}%`,
          top: `${yPos}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      >
        {binaryValue}
      </div>
    );
  }
  
  for (let i = 0; i < numCodeSymbols; i++) {
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 15 + 22;
    const codeSymbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
    
    particles.push(
      <div 
        key={`code-${i}`}
        className="data-code-symbol"
        style={{
          left: `${xPos}%`,
          top: `${yPos}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      >
        {codeSymbol}
      </div>
    );
  }
  
  for (let i = 0; i < numCharts; i++) {
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = Math.random() * 15 + 18;
    const chartSymbol = chartSymbols[Math.floor(Math.random() * chartSymbols.length)];
    
    particles.push(
      <div 
        key={`chart-${i}`}
        className="data-chart"
        style={{
          left: `${xPos}%`,
          top: `${yPos}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      >
        {chartSymbol}
      </div>
    );
  }
  
  return (
    <div className="animated-background">
      {particles}
    </div>
  );
};

export default AnimatedBackground;
