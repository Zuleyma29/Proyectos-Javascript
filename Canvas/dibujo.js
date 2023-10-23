const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.ellipse(200, 300, 190,100, 0, 0, Math.PI * 2); 
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.ellipse(200, 300, 160,100, 0, 0, Math.PI * 2); 
ctx.stroke();
ctx.beginPath();
ctx.ellipse(200, 300, 130,100, 0, 0, Math.PI * 2); 
ctx.stroke();
ctx.beginPath();
ctx.ellipse(200, 300, 90,100, 0, 0, Math.PI * 2); 
ctx.stroke();
ctx.beginPath();
ctx.ellipse(200, 300, 60,100, 0, 0, Math.PI * 2); 
ctx.stroke();
ctx.beginPath();
ctx.ellipse(200, 300, 30,100, 0, 0, Math.PI * 2); 
ctx.stroke();

//Hojas 
ctx.fillStyle='green'
ctx.beginPath();
ctx.ellipse(180, 180, 50,20, Math.PI/4, 0, Math.PI * 2); 
ctx.fill();
ctx.beginPath();
ctx.ellipse(220, 180, 50,20, Math.PI*1.6, 0, Math.PI * 2); 
ctx.fill();

// Tallo
ctx.fillStyle = 'brown';
ctx.fillRect(195, 140, 10, 40);

// Ojos 
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(150,260,20,0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(250,260,20,0, Math.PI * 2);
ctx.fill();

// Nariz
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(200, 300); 
ctx.lineTo(200, 330); 
ctx.lineTo(220, 310); 
ctx.closePath();
ctx.fill(); 

// Boca 
ctx.fillStyle = 'black';
ctx.fillRect(180, 340, 10, 10);
ctx.fillRect(210, 340, 10, 10);
ctx.beginPath();
ctx.moveTo(190, 350);
ctx.lineTo(200, 360);
ctx.lineTo(210, 350); 
ctx.closePath();
ctx.fill();

// Pecas
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(100, 310, 2, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(300, 310, 2, 0, Math.PI * 2);
ctx.fill();

// Color en sus ojos 
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(150, 260, 5, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(250, 260, 5, 0, Math.PI * 2);
ctx.fill();



