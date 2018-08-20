const duplicateFile = require('./609_DuplicateFile');

test('Find duplicate file in ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]', () => {
  expect(duplicateFile(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"])).toBeInstanceOf(Array)
})

test('Find duplicate file in ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]', () => {
  expect(duplicateFile(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"])).toEqual([ [ 'root/a/1.txt', 'root/c/3.txt' ],
      [ 'root/a/2.txt', 'root/c/d/4.txt', 'root/4.txt' ] ])
})