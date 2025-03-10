########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = CONGTRAN
SID = 1002046419
EMAIL = KNT6419@MAV.UTA.EDU
SEMESTER = SPRING2025
PROJECT=PROJ03
URL=https://youtu.be/N39K22B7r7s
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"