from rest_framework import mixins, viewsets
from rest_framework.renderers import JSONRenderer
from users.models import User
from users.serializers import UserSerializer


class UserViewSet(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin,
    mixins.RetrieveModelMixin, mixins.UpdateModelMixin
):
    renderer_classes = (JSONRenderer,)
    queryset = User.objects.all()
    serializer_class = UserSerializer
