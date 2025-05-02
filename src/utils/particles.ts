// This utility file contains functions to create and animate particles

export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export const createParticles = (count: number, canvasWidth: number, canvasHeight: number): Particle[] => {
  const particles: Particle[] = [];
  
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.5 + 0.3
    });
  }
  
  return particles;
};

export const updateParticles = (
  particles: Particle[], 
  canvasWidth: number, 
  canvasHeight: number,
  mouseX?: number,
  mouseY?: number
): Particle[] => {
  return particles.map(particle => {
    // Update position
    let newX = particle.x + particle.speedX;
    let newY = particle.y + particle.speedY;
    
    // Boundary check
    if (newX > canvasWidth) newX = 0;
    else if (newX < 0) newX = canvasWidth;
    
    if (newY > canvasHeight) newY = 0;
    else if (newY < 0) newY = canvasHeight;
    
    // Mouse interaction
    if (mouseX !== undefined && mouseY !== undefined) {
      const dx = mouseX - newX;
      const dy = mouseY - newY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = 0.5 * (1 - distance / 100);
        newX -= dx * force / 10;
        newY -= dy * force / 10;
      }
    }
    
    return {
      ...particle,
      x: newX,
      y: newY
    };
  });
};

export const drawParticles = (
  ctx: CanvasRenderingContext2D, 
  particles: Particle[], 
  color: string = 'rgba(156, 39, 176, 0.5)'
): void => {
  particles.forEach(particle => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = color.replace(')', `, ${particle.opacity})`);
    ctx.fill();
  });
};

export const connectParticles = (
  ctx: CanvasRenderingContext2D, 
  particles: Particle[], 
  maxDistance: number = 100,
  color: string = 'rgba(156, 39, 176, 0.2)'
): void => {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < maxDistance) {
        const opacity = 1 - (distance / maxDistance);
        ctx.beginPath();
        ctx.strokeStyle = color.replace(')', `, ${opacity})`);
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
};