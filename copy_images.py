# -*- coding: utf-8 -*-
"""제공된 이미지를 story-wed.png, story-tue.png로 복사"""
import shutil
import os

BASE = os.path.dirname(os.path.abspath(__file__))
ASSETS = r"C:\Users\승주\.cursor\projects\d\assets"

SRC_WED = os.path.join(ASSETS, "c__Users____AppData_Roaming_Cursor_User_workspaceStorage_dfb5e2b229cf0d89bc68360d726ccbc0_images_Gemini_Generated_Image_ze0vtoze0vtoze0v-22c3adcb-1cc7-4de9-8990-2c203046c699.png")
SRC_TUE = os.path.join(ASSETS, "c__Users____AppData_Roaming_Cursor_User_workspaceStorage_dfb5e2b229cf0d89bc68360d726ccbc0_images_Gemini_Generated_Image_rmemanrmemanrmem-dbb9797e-67a0-43f3-bf78-682276ef05b3.png")
IMAGES = os.path.join(BASE, "images")

os.makedirs(IMAGES, exist_ok=True)
shutil.copy2(SRC_WED, os.path.join(IMAGES, "story-wed.png"))
shutil.copy2(SRC_TUE, os.path.join(IMAGES, "story-tue.png"))
print("수요일(story-wed.png), 화요일(story-tue.png) 복사 완료.")
