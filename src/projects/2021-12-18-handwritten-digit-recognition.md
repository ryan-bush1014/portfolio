---
tags: project
layout: project
title: Handwritten Digit Recognition
snippetText: A feedforward neural network ('multilayer perceptron') created
  completely from scratch and trained on the MNIST digit database.
gitUrl: n/a
date: 2021-12-18T16:35:41.183Z
thumbnail: /projects/digit_rec.png
demoAvailable: true
demoURL: https://ryan-bush1014.github.io/demo/digit_recognition_demo/
---
<script src="mnist.js"></script>
<script src="model_weights_browser.js"></script>
<script src="browser_nn.js"></script>
<style>
        html,
        body {
            box-sizing: border-box;
            min-height: 100%;
        }

        html {
            text-align: center;
            background: linear-gradient(#e66465, #9198e5);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: clamp(1rem, 2vh, 3rem);
        }

        button {
            margin: 1em;
            border-radius: 1000vw;
            background: transparent;
            color: white;
            font-size: 1.5em;
            padding: 0.5em 1em;
            border: 2px solid white;
            background-color: transparent;
            transition: all, ease-out, 500ms;
        }
        button:hover {
            transform: scale(1.1);
            background-color: #e66465;
        }

        #confidence_wrapper {
            display: flex;
            width: auto;
            justify-content: center;
            flex-wrap: wrap;
        }

        .confidence {
            margin: 1em;
            border-radius: 50%;
            width: 2em;
            line-height: 2em;
            height: 2em;
            padding: 0.75em;
            text-align: center;
            color: white;
            position: relative;
            border: 0.1em white solid;
            transition: border ease 1000ms;
            --confidence: 0%;
        }

        .confidence::after {
            --col: #e66465;
            content: '';
            inset: 0;
            z-index: -1;
            position: absolute;
            transition: clip-path ease 1000ms;
            clip-path: inset(var(--confidence) 0 0 0);
            background: var(--col);
            border-radius: 50%;
        }

        #content_container {
            box-sizing: border-box;
            padding: 0 2em;
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            transform: translateY(-50%);
        }

        #mnistCanvas {
            width: 15em;
        }

        .bestAnswer {
            border: 0.1em orange solid;
        }

</style>

<div id="content_container">

  <canvas id="mnistCanvas" width="280" height="280">
    Your browser does not support the HTML5 canvas tag.
  </canvas>
  <div id="confidence_wrapper">
      <div class="confidence" id="conf_0">0</div>
      <div class="confidence" id="conf_1">1</div>
      <div class="confidence" id="conf_2">2</div>
      <div class="confidence" id="conf_3">3</div>
      <div class="confidence" id="conf_4">4</div>
      <div class="confidence" id="conf_5">5</div>
      <div class="confidence" id="conf_6">6</div>
      <div class="confidence" id="conf_7">7</div>
      <div class="confidence" id="conf_8">8</div>
      <div class="confidence" id="conf_9">9</div>
  </div>
  <br>
  <button onclick="draw_and_predict()">Next</button>
  <p id="pred"></p>
</div>
<script src="draw.js"></script>