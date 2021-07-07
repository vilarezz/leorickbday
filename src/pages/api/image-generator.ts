import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot } from '../../infra/getScreenshot'

let igPhoto: string

const getHTML = ({ name }) => `
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <style>
      :root {
  --size: 1;
  --background: #000;
  --color1: #d25778;
  --color2: #ec585c;
  --color3: #e7d155;
  --color4: #56a8c6;
}

body {
  background: var(--background);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

.ticket-visual_visual {
  width: 650px;
  height: 320px;
  margin: 100px auto;
  position: relative;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
  background: linear-gradient(
    to right,
    var(--color1),
    var(--color2),
    var(--color3),
    var(--color4)
  );
  border-radius: 20px;
  padding: 5px;
}

.ticket-visual_visual:before {
  content: '';
  display: block;
  position: absolute;
  top: 130px;
  left: -30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color1);
  z-index: 2;
}

.ticket-visual_visual:after {
  content: '';
  display: block;
  position: absolute;
  top: 130px;
  right: -30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color4);
  z-index: 2;
}

.ticket-visual-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--background);
  border-radius: 15px;
}
.ticket-visual-wrapper:before {
  content: '';
  display: block;
  position: absolute;
  top: 130px;
  left: -30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--background);
  z-index: 3;
}

.ticket-visual-wrapper:after {
  content: '';
  display: block;
  position: absolute;
  top: 130px;
  right: -30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--background);
  z-index: 3;
}

.left {
  position: absolute;
  top: 110px;
  left: -50px;
  width: 50px;
  height: 100px;
  background: var(--background);
  z-index: 4;
}

.right {
  position: absolute;
  top: 110px;
  right: -50px;
  width: 50px;
  height: 100px;
  background: var(--background);
  z-index: 4;
}
.ticket-visual_profile {
  padding: calc(39px * var(--size)) calc(155px * var(--size))
    calc(39px * var(--size)) calc(58px * var(--size));
}

.ticket-profile_text {
  margin: 0;
}

.ticket-profile_profile {
  display: flex;
  flex-direction: row;
}

.ticket-profile_profile img {
  width: 100px;
}

.ticket-event {
  margin-top: 25px;
  margin-left: -10px;
}

.ticket-profile_image {
  width: calc(82px * var(--size));
  height: calc(82px * var(--size));
  border-radius: 50%;
}

.ticket-profile_name {
  font-size: calc(32px * var(--size));
  margin: 10px 0 5px 20px;
  font-weight: 700;
}

.ticket-profile_username {
  margin: 0 0 5px 20px;
  color: #8a8f98;
  display: flex;
}

.ticket-profile_githubIcon img {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}

.ticket-visual_ticket-number-wrapper {
  position: absolute;
  right: 35px;
  bottom: 0;
}

.ticket-visual_ticket-number {
  transform: rotate(90deg) translateY(calc(100px * var(--size)));
  transform-origin: bottom right;
  font-size: calc(40px * var(--size));
  font-weight: 700;
  text-align: center;
  padding-bottom: 35px;
  width: calc(320px - 10px);
  border-bottom: 2px dashed #333;
}

.ticket-event img {
  width: 440px;
}

    </style>
  </head>
  <body>
    <div class="ticket-visual_visual" id="ticket">
      <div class="left"></div>
      <div class="right"></div>
      <div class="ticket-visual-wrapper">
        <div class="ticket-visual_profile">
          <div class="ticket-profile_profile">
            <img
              src="https://github.com/vilarezz/leorickbday/blob/main/public/approved.png?raw=true"
              alt="Usuário Não encontrado"
              class="ticket-profile_image"
            />
            <div class="ticket-profile_text">
              <p class="ticket-profile_name">${name}</p>
              <p class="ticket-profile_username">
                
               Utilize essa foto/convite para poder entrar.
              </p>
            </div>
          </div>
          <div class="ticket-event">
            <img src="https://github.com/vilarezz/leorickbday/blob/main/public/ticket.png?raw=true" />
          </div>
        </div>
        <div class="ticket-visual_ticket-number-wrapper">
          <div class="ticket-visual_ticket-number">№  ${Math.floor(
            Math.random() * 100000
          )}
          </div>
        </div>
      </div>
    </div>

    
  </body>
</html>
`

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const isHTMLDebugMode = false
  const html = getHTML({
    name: req.query.name || 'Adicione o seu nome'
  })

  if (isHTMLDebugMode) {
    res.setHeader('Content-Type', 'text/html')
    return res.end(html)
  }

  const file = await getScreenshot(html)

  res.setHeader('Content-Type', 'image/png')
  res.end(file)
}
