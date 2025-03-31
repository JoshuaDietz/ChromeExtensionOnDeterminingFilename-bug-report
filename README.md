# ChromeExtensionOnDeterminingFilename-bug-report

This is an example extension to illustrate my bug report to the chromium project: [https://issues.chromium.org/issues/401528893](https://issues.chromium.org/issues/401528893)

## How to install:

1. Clone the repo
2. Navigate to `chrome://extensions`
3. Press the button "Load unpacked extension" in the top-left corner
4. Choose the folder that you just cloned

## How to demonstrate the bug

Prerequisite: Make sure that in `chrome://settings/downloads` the setting "Ask for storage location for every download" (roughly translated) is active

1. Make sure the extension is active
2. Navigate to a page that downloads a file (in my experiment right click -> "save as" was NOT enough, it should be a download with http attachment header, the filename should be set to "test" by the extension). For example: [https://en.wikipedia.org/wiki/Google_Chrome#/media/File:Google_Chrome_icon_(February_2022).svg](https://en.wikipedia.org/wiki/Google_Chrome#/media/File:Google_Chrome_icon_(February_2022).svg) (press the download icon in the bottom right corner)
3. Save the file in a directory that is NOT the standard downloads directory
4. Start another download.  
   -> The file save dialog opens in your downloads folder again and NOT in the directory that you have previously been in 

If steps 3 and 4 are repeated with the extension deactivated, the second download will open the "Save" Dialog in the same directory that the first file has been saved to. This is the behaviour that I expect since usually when downloading multiple files one wants to save them to the same location.