---
publishDate: 2025-02-18T00:00:00Z
title: "Centerlines Extraction Using NURBS Surfaces"
excerpt: A geometry-processing feature in C# that generates centerlines from stitched NURBS coil surfaces for simulation workflows.
image: "~/assets/images/image001.png"
---

In a recent feature I developed at EMA3D, I implemented a **centerline extraction** workflow for coil geometries in an **MHarness plugin environment within Ansys**. The goal was to compute an accurate centerline from surface geometry so downstream simulation steps could reliably reference the coil’s internal path.

Due to this being proprietary work, the approach only focuses on a high level explanation, without internal implementation details.

## Approach

The coil geometry was represented as a continuous “noodle-like” 3D form composed of **two stitched NURBS surfaces** (two halves forming a single coil body). Rather than using a pre-existing medial curve, the centerline needed to be derived directly from the surface representation.

I identified opposing regions across the two NURB surface halves and computed a midpoint between the opposing points using a linear algorithm for x,y,z points. I then fit a smooth spline through the midpoint samples to form a continous centerline.

In addition to the core geometry work, I also added supporting logic to improve interoperability between systems by extending additional shape/object types within the interface to be compatiable with Discovery. 


## What I Learned

- How to translate geometric reasoning into production C# code in a CAD-driven environment  
- Practical application of linear algebra in surface-based computation  
- The importance of stable point correspondence when deriving curves from surfaces  
- How algorithm design and system integration often need to be developed together  

---