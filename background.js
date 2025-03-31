chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  suggest({
    filename: "test"
  });
});
