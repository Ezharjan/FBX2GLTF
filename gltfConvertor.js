const convert = require('fbx2gltf');
// convert('path/to/some.fbx', 'path/to/target.glb', ['--khr-materials-unlit']).then(
//the initial fbx file in relevant path,   the output file Name.format with its path
convert('./OriginalModelsFolder/initialModel.fbx', './FormatedModelFiles/target.gltf',
    ['--khr-materials-unlit']).then(
        destPath => {
            // yay, do what we will with our shiny new GLB file!
            console.log("destination path is: " + destPath);
        },
        error => {
            // ack, conversion failed: inspect 'error' for details
            console.log("error happened: " + error);
        }
    );