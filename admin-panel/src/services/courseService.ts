import type { ICourse, ICoursePayload } from "@kiranmmorpalle/common-types";
import { apiService } from "./apiService";

class CourseService {
  private base = "/auth/courses";

  async getAll() {
    return await apiService.get<ICourse[]>(this.base);
  }
  async getById(id: string) {
    return await apiService.get<ICourse>(this.base + `/${id}`);
  }
  async create(data: ICoursePayload) {
    return await apiService.post<ICourse>(this.base, data);
  }
  async update(id: string, data: ICoursePayload) {
    return await apiService.put<ICourse>(this.base + `/${id}`, data);
  }
  async delete(id: string) {
    return await apiService.delete<{ message: string }>(this.base + `/${id}`);
  }
}
export const coursesService = new CourseService();
