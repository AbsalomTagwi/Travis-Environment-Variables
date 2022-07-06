const FAVORITE_INSTRUCTOR = process.env.NAME;
//console.log(`My favorite instructor is ${FAVORITE_INSTRUCTOR}`);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('${FAVORITE_INSTRUCTOR} rocks!');
    await sleep(5000);
  }
}

main();
