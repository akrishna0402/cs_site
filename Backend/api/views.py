from rest_framework import generics
from .models import Faculty, Staff, Event, gallery , Feed , Student
from .serializers import FacultySerializer, StaffSerializer,StudentSerializer, EventSerializer, GallerySerializer , FeedSerializer


class FacultyList(generics.ListCreateAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer


class StaffList(generics.ListCreateAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

class StudentList(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class GalleryList(generics.ListCreateAPIView):
    queryset = gallery.objects.all()
    serializer_class = GallerySerializer

class FeedList(generics.ListCreateAPIView):
    queryset = Feed.objects.all()
    serializer_class = FeedSerializer


