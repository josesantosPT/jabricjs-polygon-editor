# jabricjs-polygon-editor

I created this project when i was looking for a simple polygon editor to add to an existing AngularJS project and could not find any, all the other were too complex to merge with the existing code.
So using the Fabric.js framework and its extension [fabric.ext](https://github.com/mazong1123/fabric.ext) ive built a simple script that could do what was required.

###### Usage
The image is overlapped with a canvas in wich we add the points that form the polygon, simply double click anywere on the canvas to add a new point. When there are three or more points on the canvas the polygon is drawed. You can move the points to edit the polygon and can delete any point by selecting it and clicking the "Delete Point" button.
If you wish to remove all the points just press the "Clear points" button.

The polygon and its points are all tied to the **poly** object:

var poly = {'points': [],'array':[] };

If you wish to be able to edit more polygons at the same time you only need to create an array of objects with the same structure as **poly** and be sure to execute the functions on the selected object instead of **poly**.

(If someone requests i can create a Vue.js or AngularJs version where you can add and edit multiple polygons)
