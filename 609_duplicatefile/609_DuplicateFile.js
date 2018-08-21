/*
Given a list of directory info including directory path, and all the files with contents in this directory, you need to find out all the groups of duplicate files in the file system in terms of their paths.

A group of duplicate files consists of at least two files that have exactly the same content.

A single directory info string in the input list has the following format:

"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"

It means there are n files (f1.txt, f2.txt ... fn.txt with content f1_content, f2_content ... fn_content, respectively) in directory root/d1/d2/.../dm. Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

The output is a list of group of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

"directory_path/file_name.txt"

Example 1:
Input:
["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
Output:
[["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
Note:
No order is required for the final output.
You may assume the directory name, file name and file content only has letters and digits, and the length of file content is in the range of [1,50].
The number of files given is in the range of [1,20000].
You may assume no files or directories share the same name in the same directory.
You may assume each given directory info represents a unique directory. Directory path and file info are separated by a single blank space.
Follow-up beyond contest:
Imagine you are given a real file system, how will you search files? DFS or BFS?
If the file content is very large (GB level), how will you modify your solution?
If you can only read the file by 1kb each time, how will you modify your solution?
What is the time complexity of your modified solution? What is the most time-consuming part and memory consuming part of it? How to optimize?
How to make sure the duplicated files you find are not false positive?
*/
/**
* @param {String[]} paths
* @return {String[][]}
*/
/*
initiate an object content
loop through the input arr,
    parse the content (currCon)
    parse the path(currPath)
    if currCon is not key in content object
        create pathArr []
        put currCon as a key in content, push the path into pathArr
    else push the currPath into content[currCon]
create result [];
loop through object content
if value of the key length > 1 push value into result
return result;

*/

 var findDuplicate = function(paths){
  // create output [];
// call contentObj to change the paths into object using content as key, path as value
// if value of the key length > 1 push value into output
// return output;
  var conObj = contentObj(paths)
  var output =[];
  for (key in conObj){
    let pathArr = conObj[key];
    if (pathArr.length>1){
      output.push(pathArr);
    }
  }
  return output;
}

function contentObj(paths){
// initiate an object content
  let content ={};
  //let pathsArr=paths.split(",")
  // loop through paths
  //console.log('access')
  for (let i=0; i<paths.length; i++){
    let currStrArr = paths[i].split(" ");
    //parse the path(currPath)
    let currPath =currStrArr[0]
    let currFile = currStrArr.slice(1);
    //parse the content (currCon)
    for (let j=0; j<currFile.length; j++){
      let start = currFile[j].indexOf("(");
      let end = currFile[j].indexOf(")");
      let shortPath = currFile[j].substring(0,start);
      let wholePath = currPath +'/'+shortPath;
      let currCon = currFile[j].substring(start+1,end);
      //if currCon is not key in content object
      if (! content.hasOwnProperty(currCon)){
        let pathArr = [wholePath];
        //put currCon as a key in content, push the path into pathArr
        content[currCon] = pathArr
      } else {
        let pathArr = content[currCon];
        pathArr.push(wholePath);
        content[currCon]=pathArr;
      }//else push the currPath into content[currCon]
    }
  }
return content;
}

const paths = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
let result = contentObj(paths);
let result2 = findDuplicate(paths);
console.log(result2);

// export { contentObj, findDuplicate }
module.exports = findDuplicate;
