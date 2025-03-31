# ChromeExtensionOnDeterminingFilename-bug-report

This is an example extension to illustrate my bug report to the chromium project: https://issues.chromium.org/issues/401528893

## How to install:
1. clone the repo
2. navigate to chrome://extensions
3. press the button "load unpacked extension" in the top-left corner
4. choose the folder that you just cloned

## How to demonstrate the bug
Prerequisit: Make sure that in chrome://settings/downloads the setting "Ask for storage location for every download" (rough translation) is active
1. Make sure the extension is active
2. Navigate to a page that downloads a file (in my experiment right click -> save as was NOT enough, it should be a download with http attachment header)
3. Save the file in a directory that is NOT the standard downloads directory
4. Start another download. 
 -> The file save dialog opens in your downloads folder again and NOT in the directory that you have previously been in 

If steps 3 and for are repeated with the extension deactivated, the second download fill open the "Save" Dialog in the same directory that the first file has been saved to