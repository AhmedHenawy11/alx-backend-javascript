/* eslint-disable no-console */

// Promsie.race() to return faster response from the elements
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((value) => value);
}
