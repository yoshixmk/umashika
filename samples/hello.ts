export function hello() {
  console.log("hello!");

  if (import.meta.main) {
    console.log("main");
  }
}

if (import.meta.main) {
  hello();
}
