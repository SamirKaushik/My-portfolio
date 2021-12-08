import cv2
import numpy as np
# test image path at line 85 

def traffic_signal(image):
    imgGray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    imgBlur = cv2.GaussianBlur(imgGray, (7, 7), 1)
    imgCanny = cv2.Canny(imgBlur, 50, 50)
    # now detecting the corners of rectangle to cut the original image
    contours, hierarchy = cv2.findContours(imgCanny, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    for cnt in contours:
        #     cv2.drawContours(imgContour, cnt, -1, (0, 255, 0), 3)
        #     cv2.imshow("contours", imgContour)
        #     cv2.waitKey(0)
        # above code shows that only traffic lights have been selected
        perimeter = cv2.arcLength(cnt, True)
        approx = cv2.approxPolyDP(cnt, 0.02 * perimeter, True)
        # objCor = len(approx)
        # x, y, w, h = cv2.cv2.boundingRect(approx)
        # cv2.rectangle(imgContour, (x, y), (x + w, y + h), (0, 255, 0), 2)
        # cv2.imshow("abc", imgContour)
        # cv2.waitKey(0)
        # print(x, y, w, h)
        points = approx.ravel()
        # print(points)
        traffic_light = img[points[1]:points[3], points[0]:points[3]]

        # code below shows the cropped traffic light
        # cv2.imshow("traffic light", traffic_light)
        # cv2.waitKey(0)

        # now detecting red , yellow and green colours
        def detect_red(light):
            imgHSV = cv2.cvtColor(light, cv2.COLOR_BGR2HSV)
            lower = np.array([0, 70, 50])
            upper = np.array([10, 255, 255])
            mask = cv2.inRange(imgHSV, lower, upper)
            img_red = cv2.bitwise_and(light, light, mask=mask)
            # cv2.imshow("red", img_red)
            # cv2.waitKey(0)
            blank = np.zeros_like(img_red)
            if cv2.GaussianBlur(img_red, (101, 101), 500).any() != blank.any():
                return True
            else:
                return False

        def detect_yellow(light):
            imgHSV = cv2.cvtColor(light, cv2.COLOR_BGR2HSV)
            lower = np.array([20, 100, 100])
            upper = np.array([30, 255, 255])
            mask = cv2.inRange(imgHSV, lower, upper)
            img_yellow = cv2.bitwise_and(light, light, mask=mask)
            # cv2.imshow("yellow", img_yellow)
            # cv2.waitKey(0)
            blank = np.zeros_like(img_yellow)
            if cv2.GaussianBlur(img_yellow, (101, 101), 500).any() != blank.any():
                return True
            else:
                return False

        def detect_green(light):
            imgHSV = cv2.cvtColor(light, cv2.COLOR_BGR2HSV)
            lower = np.array([40, 40, 40])
            upper = np.array([70, 255, 255])
            mask = cv2.inRange(imgHSV, lower, upper)
            img_green = cv2.bitwise_and(light, light, mask=mask)
            # cv2.imshow("green", img_green)
            # cv2.waitKey(0)
            blank = np.zeros_like(img_green)
            if cv2.GaussianBlur(img_green, (101, 101), 500).any() != blank.any():
                return True
            else:
                return False
        if detect_red(traffic_light) == False and detect_yellow(traffic_light) == False:
            print("GREEN")
        elif detect_red(traffic_light) == False and detect_green(traffic_light) == False:
            print("YELLOW")
        elif detect_green(traffic_light) == False and detect_yellow(traffic_light) == False:
            print("RED")
        else:
            print("ERROR")



img = cv2.imread("test/test6.jpeg")
imgContour = img.copy()
copy_traffic = img.copy()
imgHSV = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
lower = np.array([110, 50, 50])
upper = np.array([130, 255, 255])
mask = cv2.inRange(imgHSV, lower, upper)
img_blue_rect = cv2.bitwise_and(img, img, mask=mask)
traffic_signal(img_blue_rect)
