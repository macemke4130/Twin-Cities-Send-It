-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tcsi
-- ------------------------------------------------------
-- Server version	5.7.32-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hills`
--

DROP TABLE IF EXISTS `hills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `maplink` varchar(1000) DEFAULT NULL,
  `mapembed` varchar(1000) DEFAULT NULL,
  `gps` varchar(64) DEFAULT NULL,
  `rating` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hills`
--

LOCK TABLES `hills` WRITE;
/*!40000 ALTER TABLE `hills` DISABLE KEYS */;
INSERT INTO `hills` VALUES (1,'Park Spanish Immersion Elementary School','Great hill with a fantastic asphalt runup and sidewalk entrance.',1,'https://goo.gl/maps/pFJxCNUoDZ591e738','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.6247529739861!2d-93.39915317079365!3d44.954703947747404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU3JzE2LjkiTiA5M8KwMjMnNTUuMCJX!5e1!3m2!1sen!2sus!4v1620576388575!5m2!1sen!2sus','44.95481907653575, -93.39854742518634',2,'2021-04-19 21:16:09'),(2,'Lyndale Farmstead Park','Check out the bike shop around the corner.',1,'https://goo.gl/maps/8NAg11GhDJ8oF7mm8','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.8661914075296!2d-93.29224817079378!3d44.93095894814002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU1JzUxLjUiTiA5M8KwMTcnMzAuMSJX!5e1!3m2!1sen!2sus!4v1620576551526!5m2!1sen!2sus','44.93088313298915, -93.29181141984454',1,'2021-04-20 01:33:23'),(3,'Gauvitte Park','Real fun, residents of the apartment complex may hassle you.',1,'https://goo.gl/maps/DpoLVri1nzgbB8fUA','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d582.7066073888391!2d-93.26626617079343!3d45.04491194625438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDAyJzQxLjciTiA5M8KwMTUnNTYuNiJX!5e1!3m2!1sen!2sus!4v1620576901185!5m2!1sen!2sus','45.044942219689716, -93.26582685115912',1,'2021-04-20 01:40:35'),(4,'46th Street Double Send','Not for the faint of heart.',1,'https://goo.gl/maps/MAmHs5zoKW9aoWaE9','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1168.0190971918296!2d-93.20746149102794!3d44.91685537963608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU1JzAwLjciTiA5M8KwMTInMjQuMCJX!5e1!3m2!1sen!2sus!4v1620575405685!5m2!1sen!2sus','44.916922644529706, -93.2068542134591',3,'2021-04-20 01:44:53'),(5,'Chatnam Trails Park','Very fun, lots of deer in the area. Good small hill in the middle for a jump if you\'re up for it.',1,'https://goo.gl/maps/X9Bofpmz5RPKT5fS7','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.2096655696992!2d-93.17720522812147!3d45.054902589627915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDAzJzE3LjYiTiA5M8KwMTAnMzQuNiJX!5e1!3m2!1sen!2sus!4v1620575585902!5m2!1sen!2sus','45.05490333547928, -93.17635208100631',2,'2021-04-20 01:49:07'),(7,'Keyes Park','Lots of hills to choose from to accomodate all skill sets',1,'https://goo.gl/maps/XXoF9s64BiB98WUE7','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.3078981104566!2d-93.23824481647016!3d45.05008133731962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDAzJzAwLjMiTiA5M8KwMTQnMTQuOSJX!5e1!3m2!1sen!2sus!4v1620682470035!5m2!1sen!2sus','45.05000387307687, -93.23763095297546',2,'2021-04-20 01:53:33'),(8,'Church of All Sends','Dodge trees and stumps on the way down. Good small hill at the end for a jump.',1,'https://goo.gl/maps/E1B6W4zvNfCB8hUt6','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.3821478927318!2d-93.23030934192782!3d45.0464368898461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDAyJzQ3LjIiTiA5M8KwMTMnNDUuMiJX!5e1!3m2!1sen!2sus!4v1620575850641!5m2!1sen!2sus','45.0464217314164, -93.22919224798444',1,'2021-04-20 01:57:00'),(9,'Sibley Historic Site','Entrance to the River Bottoms. Start on the sidewalk up the hill for a better time. Good small hill at the end for a jump.',1,'https://goo.gl/maps/MKujMi8nb7YQtLNGA','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1168.6198900522845!2d-93.1664753419293!3d44.887290895111164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDUzJzE0LjIiTiA5M8KwMDknNTUuNCJX!5e1!3m2!1sen!2sus!4v1620575910885!5m2!1sen!2sus','44.887310263870425, -93.16529176685242',1,'2021-04-20 02:00:24'),(10,'Baker Park','',1,'https://goo.gl/maps/kpM3M4wop3DBo7eS9','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.9249775908199!2d-93.09472517080978!3d44.92517594823562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU1JzMwLjYiTiA5M8KwMDUnMzkuMCJX!5e1!3m2!1sen!2sus!4v1620576019537!5m2!1sen!2sus','44.92519233012985, -93.09417644851413',0,'2021-04-20 02:03:49'),(11,'Valley Place Park Sledding Hill','',1,'https://goo.gl/maps/DTQ4AjPSpFY6nbsy6','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.0035383757055!2d-93.36941717079348!3d45.01575394673721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDAwJzU2LjciTiA5M8KwMjInMDcuOSJX!5e1!3m2!1sen!2sus!4v1620576210927!5m2!1sen!2sus','45.01576209551449, -93.36887598564064',0,'2021-04-20 02:10:46'),(12,'French Regional Park Sledding Hill','',1,'https://goo.gl/maps/rVHifEpt6wCRb2f7A','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.8575573156334!2d-93.43478722812162!3d45.023096590513845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDAxJzIzLjEiTiA5M8KwMjYnMDEuOSJX!5e1!3m2!1sen!2sus!4v1620576265009!5m2!1sen!2sus','45.023091312740384, -93.4338504939871',0,'2021-04-20 02:11:05'),(13,'Eagan Central Park','Two options: Ride to the parking lot or send it down through the park.',1,'https://goo.gl/maps/wDxkH5ScYceCniUG7','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169.5690589040628!2d-93.16910734192973!3d44.84055189665473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDUwJzI2LjAiTiA5M8KwMTAnMDQuOSJX!5e1!3m2!1sen!2sus!4v1620682840430!5m2!1sen!2sus','44.840563018562655, -93.16803821588005',2,'2021-04-28 04:19:37'),(14,'Water Towers of Doom','The most fun hills in the Twin Cities. No trespassing signs everywhere. Don\'t ride on the golf course at all or the club will call the pigs #ACAB',1,'https://goo.gl/maps/3p9VwfNsAU9qm2fd9','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1167.9735675483757!2d-93.16659559282355!3d44.91909522933706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU1JzA4LjciTiA5M8KwMDknNTcuMiJX!5e1!3m2!1sen!2sus!4v1620682985178!5m2!1sen!2sus','44.919141901561375, -93.16581283724491',3,'2021-04-30 04:08:34'),(15,'Short and Sweet','Good short and steep hill with a great place to launch.',1,'https://goo.gl/maps/Q8AdLyMtXHJXdDHK6','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.8292271718175!2d-93.08414017079372!3d44.93459494807992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU2JzA0LjUiTiA5M8KwMDUnMDAuOSJX!5e1!3m2!1sen!2sus!4v1620673493934!5m2!1sen!2sus','44.934594, -93.083593',1,'2021-05-10 19:06:10');
/*!40000 ALTER TABLE `hills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hill_id` int(11) DEFAULT NULL,
  `filename` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (1,13,'PXL_20210426_155344635.jpg'),(2,13,'PXL_20210426_155614195.jpg'),(3,14,'P4280252.jpg'),(4,14,'P4280230.jpg'),(5,14,'P4280249.jpg'),(6,14,'PXL_20210429_004952502.jpg'),(7,14,'PXL_20210429_002601052.jpg'),(8,3,'PXL_20210408_005318686.jpg'),(9,1,'PXL_20210418_191623311.jpg'),(11,7,'IMG_20190408_180719683.jpg'),(12,7,'IMG_20190408_180709812.jpg'),(13,15,'P5060194.jpg'),(14,5,'PXL_20210417_004540161.jpg'),(15,5,'PXL_20210417_002848812.jpg'),(16,1,'P4180152.jpg');
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mace');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hill_id` int(11) DEFAULT NULL,
  `src` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` VALUES (1,14,'https://www.youtube.com/embed/AzHrkUo-YcY'),(2,15,'https://www.youtube.com/embed/mJ58NEvUwmE'),(3,1,'https://www.youtube.com/embed/F7RjdpKvPt0');
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'tcsi'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-11  9:32:42
