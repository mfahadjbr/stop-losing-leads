from pathlib import Path
from urllib.request import urlretrieve
from PIL import Image
Image.open('public/assets/company-logo.jpg').save('public/assets/company-logo.png')
for i,vid in enumerate(['kD6Mu7V0eqU','2GJiK9GdjEQ','OqyIwlXkEpQ'],1):
 urlretrieve('https://i.ytimg.com/vi/'+vid+'/hqdefault.jpg', 'public/assets/proof-reference-'+str(i)+'.jpg')
