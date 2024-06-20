"use client";
import { colors } from "@nextui-org/theme";
import React, { useEffect, useRef } from "react";

function SharpComponent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const numCircles = 4;

    let circles = Array.from({ length: numCircles }).map((_, i) => ({
      angle: Math.random() * Math.PI * 0.1, // Random initial angle
      radius: (0.1 + 0.1 * i) * Math.min(canvas.width, canvas.height), // Increasing radius
      distortFactor: Math.random() * 8, // Random distortion factor
    }));

    const drawCircle = (circle) => {
      ctx.beginPath();
      for (let i = 0; i < 2 * Math.PI; i += 0.1) {
        const distort =
          1.5 + Math.sin(circle.angle + i * circle.distortFactor) * 0.1;
        const xPos = centerX + circle.radius * distort * Math.cos(i);
        const yPos = centerY + circle.radius * distort * Math.sin(i);
        ctx.lineTo(xPos, yPos);
      }
      ctx.closePath();
      ctx.stroke();
    };

    const updateCircles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.purple[500]; // Set the color to red with transparency
      circles.forEach((circle) => {
        circle.angle += 0.01; // Update the angle for spiral effect
        drawCircle(circle);
      });
      requestAnimationFrame(updateCircles);
    };

    updateCircles();

    return () => {
      cancelAnimationFrame(updateCircles); // Cleanup on component unmount
    };
  }, []);
  return (
    <canvas
      style={{
        transitionDuration: 0.5,
      }}
      ref={canvasRef}
      className="w-full h-[800px]"
    />
  );
}

export default SharpComponent;
