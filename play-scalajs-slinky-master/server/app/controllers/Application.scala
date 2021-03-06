package controllers

import javax.inject._

import edu.trinity.videoquizreact.shared.SharedMessages
import play.api.mvc._
import models.DougStatData

@Singleton
class Application @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def index = Action {
    Ok(views.html.index(SharedMessages.itWorks))
  }

  def table(col: Int) = Action {
    val sortedData = if (col == 0) DougStatData.data.sortBy(_.name) 
      else DougStatData.data.sortBy(_.stats(col - 1))
    Ok(views.html.table(sortedData.toSeq))
  }

}
