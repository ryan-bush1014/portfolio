---
tags: project
layout: project
title: Raymarching Rendering Engine
snippetText: A 3D renderer capable of displaying any model represented by a
  signed distance field
gitUrl: N/A
date: 2021-09-05T18:58:16.663Z
thumbnail: /projects/blend.png
demoAvailable: false
---
# C Language Raymarcher

Raymarching--like raytracing, involves the casting of 'rays' outward from a camera. Where these two techniques differ, however, is how geometry is represented and how efficiently one can calculate the distance to the nearest geometry.

## Signed Distance Fields

To render an object with raymarching, you must first obtain its mathematical representation as a signed distance field (SDF)--essentially, you must be able to give the distance to the object from any arbitrary input coordinate. This is simple for basic spheres, prisms, lines, etc., but becomes complicated very quickly for anything more intricate.

The key is to use simple geometry in coordination, that is, calculate the SDF of the union of two or more shapes.

![](/projects/blend.png "Two Spheres blended with a smooth min function")

<!-- ![](/projects/3d-infinite.png "Infinite spheres rendered with domain repetition") -->
