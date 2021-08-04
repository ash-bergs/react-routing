# Routing in React

Routing between views in React is the key to taking advantage of the library's powerful and selective rendering model, and most of us know how to set it up quickly with the de facto routing library known as React Router. But React Router is a double-edged sword, while quick, declarative, and readable - it often introduces breaking changes that can take some doing, and require some understanding, to resolve.

This repo aims to explore how routing works with a third party library doing the low-level stuff for us.

## Branch - section-one/setup

Basic setup of the project

## Branch - section-two/brute-force-routing

Sets up the most basic routing so we can to take a look at how we'll need the browser environment to accomplish our task.

## Branch - section-three/Route-component

Creates a reusable React component to transition between views

## Branch - section-four/navigation

Discusses navigation in an app, and builds a Nav bar component with links to jump around the app

## Branch - section-five/custom-PopStateEvent

We create our own popstate event! Through principles of React, and browser functionality, the Route and Link components are given a line of communication through event listeners.
