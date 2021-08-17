
//const fs = require('fs')
const {createCanvas} = require('canvas')

const width = 500
const height = 500
let step = 10;

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

context.fillStyle = '#FFFFFF'
context.fillRect(0, 0, width, height)

function draw(data){
	// /d 10 50 R
	let x = data[3] + data[4];
	let y = data[6] + data[7];
	let c = data[9];

	if(c === 'R') context.fillStyle = '#FF0000';
	else if(c === 'G') context.fillStyle = '#00FF00';
	else if(c === 'B') context.fillStyle = '#0000FF';
	else if(c === '#') context.fillStyle = data[9] + data[10]+data[11]+data[12]+data[13]+data[14]+data[15];
	else context.fillStyle = '#000000';
	context.fillRect(x * step, y * step , step , step);

//	const buffer = canvas.toBuffer('image/png')
//	fs.writeFileSync('./test.png', buffer)
}

const Discord = require('discord.js-v11');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
	var code = msg.content[0] + msg.content[1];
  	if (code === '/d' && msg.channel.id === '877042432783568957') {
		draw(msg.content);	
	 	msg.channel.send("", {files: [canvas.toBuffer('image/png')]});
  	}
});
 

client.login('ODc0NTg3NTM4NzEzNjIwNTEw.YRJJHg.nxQmCN0G56uiJZC_QniaQffJGqA');

