import Splitting from 'splitting'

const SplitByLines = (target) => {
    // let target = document.querySelector(selector);
    let results = new Splitting({ target: target, by: 'lines' });
    let newContent = '';
    
    results[0].lines.forEach((line, index) => {
        let content = '<span>';
        line.forEach(word => {
          content += word.innerText += ' ';
          // console.log(word.innerText)
        })
        content += '</span>';
        newContent += content;
    })
  
    return newContent;
  }

export default SplitByLines