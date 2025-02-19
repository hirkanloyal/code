function zipFiles(dom){
  let zip = new JSZip();
  for(let f of dom.files){
      zip.file(f.webkitRelativePath, f);
  }
  
 zip.generateAsync({type:"blob"})
  .then(function (blob) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'test.zip';
    link.click();
  });
}

