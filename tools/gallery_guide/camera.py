"""Pinhole camera for the gallery layout guide.

World axes, in meters: x to the judge's left-to-right as seen from the well, y up,
z from the well toward the judge. Camera space: x right, y up, z forward.
"""

from dataclasses import dataclass
import math

NEAR_PLANE = 0.05


@dataclass(frozen=True)
class Camera:
    x: float
    y: float
    z: float
    yaw_deg: float = 0.0
    pitch_deg: float = 0.0
    focal_px: float = 900.0
    width: int = 1376
    height: int = 768

    def to_camera(self, point):
        dx, dy, dz = point[0] - self.x, point[1] - self.y, point[2] - self.z
        yaw, pitch = math.radians(self.yaw_deg), math.radians(self.pitch_deg)
        x1 = dx * math.cos(yaw) - dz * math.sin(yaw)
        z1 = dx * math.sin(yaw) + dz * math.cos(yaw)
        y2 = dy * math.cos(pitch) - z1 * math.sin(pitch)
        z2 = dy * math.sin(pitch) + z1 * math.cos(pitch)
        return (x1, y2, z2)

    def to_screen(self, cam_point):
        x, y, z = cam_point
        return (self.width / 2 + self.focal_px * x / z,
                self.height / 2 - self.focal_px * y / z)

    def project(self, point):
        """Screen position of a world point, or None when it is behind the camera."""
        cam = self.to_camera(point)
        if cam[2] < NEAR_PLANE:
            return None
        return self.to_screen(cam)

    def distance(self, point):
        return math.dist((self.x, self.y, self.z), point)

    def project_polygon(self, world_points):
        """Screen polygon clipped at the near plane; empty when fully behind."""
        clipped = clip_near([self.to_camera(p) for p in world_points])
        return [self.to_screen(p) for p in clipped]


def clip_near(cam_points):
    """Sutherland-Hodgman against z = NEAR_PLANE."""
    result = []
    for i, current in enumerate(cam_points):
        previous = cam_points[i - 1]
        current_in, previous_in = current[2] >= NEAR_PLANE, previous[2] >= NEAR_PLANE
        if current_in != previous_in:
            t = (NEAR_PLANE - previous[2]) / (current[2] - previous[2])
            result.append(tuple(previous[k] + t * (current[k] - previous[k]) for k in range(3)))
        if current_in:
            result.append(current)
    return result
